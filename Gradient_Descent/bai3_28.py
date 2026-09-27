# Bài 3.28 - Perceptron

import numpy as np


# Trọng số ban đầu
w = np.array([-2, 1, 0])

# Điểm dữ liệu
x = np.array([2, 3, 1])

# Nhãn thực tế
y = 1

# Learning rate
eta = 1

# 1. Tính w^T x ban đầu
wx = np.dot(w, x)

print("1. Kiểm tra mẫu:")
print(f"w^T x = {wx}")


# Xác định nhãn dự đoán
if wx >= 0:
    y_pred = 1
else:
    y_pred = -1

print(f"Nhãn dự đoán = {y_pred}")
print(f"Nhãn thực tế = {y}")
print()


# Kiểm tra phân lớp
if y_pred != y:

    print("Mẫu bị phân lớp sai.")
    print()

    # 2. Cập nhật Perceptron
    print("2. Cập nhật trọng số:")

    print("Công thức:")
    print("w_new = w + eta * y * x")

    w = w + eta * y * x

    print(f"w mới = {w}")
    print()

else:

    print("Mẫu được phân lớp đúng.")
    print("Không cần cập nhật trọng số.")


# 3. Tính lại w^T x
wx_new = np.dot(w, x)

print("3. Sau cập nhật:")
print(f"w^T x = {wx_new}")

if wx_new >= 0:
    y_new = 1
else:
    y_new = -1

print(f"Nhãn dự đoán mới = {y_new}")