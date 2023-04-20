# A simple calculator that prompts the user to enter two inputs and the operation the they want to perform
# To run the file, use 'python calculator.py'
# Make sure oython is installed in your nvironment

# Get the first input form th user
num1 = float(input("Enter the first number: "))

# Get the second input from the user
num2 = float(input("Enter the second number: "))

# Ask the user to select the operation they want to perform
print("Select the operation you want to perform:")
print("+ for addition")
print("- for subtraction")
print("* for multiplication")
print("/ for division")
operation = input()


if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    result = num1 / num2
else:
    print("Operation not valid")
    exit()

print("Result: ", result)
