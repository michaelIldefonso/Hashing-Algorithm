from ratelimit import limits, sleep_and_retry
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
import time

ONE_MINUTE = 60

# Initialize the PasswordHasher with custom parameters
ph = PasswordHasher(
    time_cost=12,          # Number of iterations (time cost)
    memory_cost=2 ** 16,    # Memory cost (in KB)
    parallelism=1,          # Number of parallel threads
    hash_len=64,            # Length of the resulting hash
    salt_len=16             # Length of the salt (handled internally by Argon2)
)

# Rate-limited function to hash the password
@sleep_and_retry  # Ensures that the function sleeps if the limit is reached
@limits(calls=5, period=ONE_MINUTE)
def hash_password(name, passwrd):
    combined_input = name + passwrd
    return ph.hash(combined_input)

# Function to verify a password (during user login)
def verify_password(stored_hash, name, entered_password):
    # Combine the username and entered password for verification
    combined_input = name + entered_password
    try:
        # Verify if the combined input matches the stored hash
        ph.verify(stored_hash, combined_input)
        return True
    except VerifyMismatchError:
        return False

# Simulate user registration (hashing the password)
userName = input("Username: ").strip()  # either email or username
password = input("Password: ").strip()

hashed_password = None  # Initialize hashed_password

try:
    hashed_password = hash_password(userName, password)
    print("Hashed Password:", hashed_password)
except Exception as e:
    print("Password hashing failed:", str(e))

# Check if hashing was successful before verifying the password
if hashed_password:
    # Simulate user login (verifying the password)
    login_password = input("Enter your password to login: ").strip()

    # Verify the entered password against the stored hash
    is_password_valid = verify_password(hashed_password, userName, login_password)

    if is_password_valid:
        print("Password is valid! You are logged in.")
    else:
        print("Invalid password. Please try again.")


    # def simulate_hashing(username, password):
    #     for i in range(7):  # Simulate 7 attempts
    #         try:
    #             print(f"\nAttempt {i + 1}")
    #             hashed_value = hash_password(username, password)
    #             print("Hashed Password:", hashed_value)
    #         except Exception as e:
    #             print("Error:", e)
    #         time.sleep(1)
# simulate_hashing(userName, password)
