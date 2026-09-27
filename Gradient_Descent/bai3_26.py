# Điểm khởi tạo
x = 5

# Learning rate
eta = 0.2


# Hàm số f(x)
def f(x):
    return x**2 - 4*x + 5


# Đạo hàm f'(x)
def df(x):
    return 2*x - 4

print("Đạo hàm: f'(x) = 2x - 4")
print()

print(f"Ban đầu: x(0) = {x}")
print(f"f(x(0)) = {f(x):.4f}")
print()


# Thực hiện 4 bước cập nhật
for i in range(1, 5):

    # Tính đạo hàm
    gradient = df(x)

    # Công thức Gradient Descent
    x = x - eta * gradient

    # Tính giá trị hàm
    value = f(x)

    print(f"Bước {i}:")
    print(f"  Gradient = {gradient:.4f}")
    print(f"  x({i}) = {x:.4f}")
    print(f"  f(x({i})) = {value:.4f}")
    print()


print("KẾT LUẬN:")
print("Giá trị x đang tiến dần về 2.")
print("Giá trị f(x) giảm dần.")
print("Thuật toán đang hội tụ về điểm cực tiểu.")