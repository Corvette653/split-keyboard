from exercise import parse

TESTS = {
  '1234': 1234,
  '01234': 1234,
  '+1234': 1234,
  '1_234': 1234,
  '1_000_000': 1000000,
  '-1234': -1234,
  '12.34': 12.34,
  '012.34': 12.34,
  '+012.34': 12.34,
  '-12.34': -12.34,
  '1.2e3': 1.2e3,
  '-01.2E-3': -1.2e-3
}

PASSED = 0

def print_green(message):
  print(f"\033[92m{message}\033[00m")

def print_yellow(message):
  print(f"\033[93m{message}\033[00m")

def print_red(message):
  print(f"\033[91m{message}\033[00m")

def print_passed(input, output):
  print_green(f"Test passed: {input} -> {output}")

def print_failed(input, output, expected):
  print_yellow(f"Test failed: {input}")
  print_yellow(f"GOT: {output}")
  print_yellow(f"EXPECTED: {expected}")

def print_error(input, error):
  print_red(f"Test failed: {input}")
  print_red(f"ERROR: {error}")

for input, expected in TESTS.items():
  input = list(input)
  try:
    if parse(input) == expected:
      PASSED += 1
      print_passed(input, expected)
    else:
      print_failed(input, parse(input), expected)
  except Exception as e:
    print_error(input, e)

print(f"passed {PASSED} / 10")