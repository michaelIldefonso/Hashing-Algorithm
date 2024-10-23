from argon2 import PasswordHasher

# Initialize the PasswordHasher with custom parameters
ph = PasswordHasher(
    time_cost=12,          # Number of iterations (time cost)
    memory_cost=2 ** 16,  # Memory cost (in KB)
    parallelism=1,        # Number of parallel threads
    hash_len=64,          # Length of the resulting hash
    salt_len=16           # Length of the salt (handled internally by Argon2)
)

# Get user input for email and password
userName = input("Username: ") #either email or username
password = input("Password: ")

# Concatenate email and password for hashing
combined_input = userName + password

# Hash the combined input
hash_value = ph.hash(combined_input)

print("Hashed Password:", hash_value)

# Verify the password
try:
    # Verify the combined input (email + password) against the hash
    ph.verify(hash_value, combined_input)
    print("Password is valid!")
except Exception as e:
    print("Password verification failed:", str(e))
