# 🔐 bisHash – Secure Password Hashing & Rate Limiting

`bisHash` is a lightweight Python module for secure password hashing using Argon2 with additional peppering, strong password validation, and built-in rate-limiting to protect against brute-force and abuse in login or signup flows.

---

## 📦 Installation

```bash
pip install bisHash
```

---

## ✨ Features

- ✅ **Argon2-based Password Hashing** with a pepper
- 🔐 **Strong Password Strength Validation**
- 🚫 **Rate Limiting** for signup attempts per IP
- 🔒 **Account Lockout** for repeated failed login attempts
- 🧠 **In-memory tracking** of attempts per identifier or IP

---

## 🛠 Usage

### 🔑 Hashing a Password (e.g., on Signup)

```python
from bisHash import bis_hash, TooManyAttemptsError

try:
    hash = bis_hash(ip="192.168.1.100", identifier="user@example.com", password="StrongPass!23")
except TooManyAttemptsError:
    print("Too many signup attempts. Please try again later.")
```

---

### 🔒 Verifying a Password (e.g., on Login)

```python
from bisHash import verify_password

# After retrieving the stored hash from your DB:
is_valid = verify_password(stored_hash, "user@example.com", "StrongPass!23")

if is_valid:
    print("Login successful")
else:
    print("Login failed or account is locked.")
```

---

### 🔍 Checking Password Strength

```python
from bisHash import is_strong_password

ok, message = is_strong_password("Weakpass123")
print(message)
```

---

## 📚 API Reference

### `is_strong_password(password)`
Returns a tuple `(bool, message)` indicating password strength.

### `bis_hash(ip, identifier, password)`
Returns a secure hash of the password. Enforces rate limiting. Raises `TooManyAttemptsError` if attempts exceed the allowed limit per IP.

### `verify_password(stored_hash, identifier, entered_password)`
Verifies a given password against the stored hash and applies login lockout rules.

### `TooManyAttemptsError`
Raised if the rate limit is exceeded (e.g., too many signup attempts).

---

## ⚠️ Notes

- In-memory tracking is used for failed attempts. **Replace with persistent storage** (like Redis) for production.
- The internal `PEPPER` should ideally be loaded from an **environment variable** in secure environments.

---

## 🧪 Defaults

- ✅ **Password minimum length**: 12 characters
- ✅ **Required characters**: uppercase, lowercase, digit, special
- 🚫 **Signup limit**: 5 attempts per IP per 10 minutes
- 🔒 **Login lockout**: 5 failed attempts per 10 minutes

---

## 📄 License

MIT — Free to use, modify, and distribute.

---
