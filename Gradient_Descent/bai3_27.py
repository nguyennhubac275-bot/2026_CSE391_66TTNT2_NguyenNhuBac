import numpy as np

# Trọng số
w = np.array([1, 2, -10])

# Điểm dữ liệu
x = np.array([3, 4, 1])

# Nhãn thực tế
y = -1

# 1. Tính w^T x
wx = np.dot(w, x)

print("1. Tính w^T x:")
print(f"w^T x = {wx}")
print()


# 2. Xác định nhãn dự đoán
if wx >= 0:
    y_pred = 1
else:
    y_pred = -1

print("2. Nhãn dự đoán:")
print(f"y_pred = {y_pred}")
print()


# 3. Kiểm tra phân lớp sai
print("3. Kiểm tra phân lớp:")

if y_pred != y:
    print("Điểm dữ liệu bị phân lớp sai.")
else:
    print("Điểm dữ liệu được phân lớp đúng.")


print()
print(f"Nhãn thực tế: {y}")
print(f"Nhãn dự đoán: {y_pred}")