import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.linear_model import Perceptron

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)

# ==================================================
# 1. TẠO DỮ LIỆU
# ==================================================

np.random.seed(42)

# Số lượng mẫu
n_samples = 300


# Số tiền giao dịch
amount = np.random.uniform(
    10,
    1000,
    n_samples
)


# Số lần giao dịch
frequency = np.random.randint(
    1,
    20,
    n_samples
)


# Khoảng cách từ địa điểm quen thuộc
distance = np.random.uniform(
    0,
    100,
    n_samples
)


# ==================================================
# 2. TẠO NHÃN
# ==================================================

# Tạo điểm đánh giá mức độ bất thường
score = (
    0.002 * amount
    + 0.1 * frequency
    + 0.03 * distance
)


# Nếu score lớn -> giao dịch gian lận
y = np.where(
    score > 3.5,
    1,
    -1
)


# ==================================================
# 3. TẠO MA TRẬN X
# ==================================================

X = np.column_stack((
    amount,
    frequency,
    distance
))


print("Số lượng dữ liệu:", len(X))

print("Số giao dịch hợp lệ:",
      np.sum(y == -1))

print("Số giao dịch gian lận:",
      np.sum(y == 1))

print()


# ==================================================
# 4. CHIA DỮ LIỆU TRAIN / TEST
# ==================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)


print("Số dữ liệu huấn luyện:",
      len(X_train))

print("Số dữ liệu kiểm tra:",
      len(X_test))

print()


# ==================================================
# 5. XÂY DỰNG MÔ HÌNH PERCEPTRON
# ==================================================

model = Perceptron(
    max_iter=1000,
    eta0=0.01,
    random_state=42
)


# ==================================================
# 6. HUẤN LUYỆN
# ==================================================

model.fit(
    X_train,
    y_train
)


print("Đã huấn luyện xong mô hình.")
print()


# ==================================================
# 7. DỰ ĐOÁN
# ==================================================

y_pred = model.predict(
    X_test
)


# ==================================================
# 8. TÍNH CÁC ĐỘ ĐO
# ==================================================

accuracy = accuracy_score(
    y_test,
    y_pred
)

precision = precision_score(
    y_test,
    y_pred,
    pos_label=1,
    zero_division=0
)

recall = recall_score(
    y_test,
    y_pred,
    pos_label=1,
    zero_division=0
)

f1 = f1_score(
    y_test,
    y_pred,
    pos_label=1,
    zero_division=0
)


# ==================================================
# 9. HIỂN THỊ KẾT QUẢ
# ==================================================

print("=" * 50)
print("KẾT QUẢ ĐÁNH GIÁ")
print("=" * 50)

print(f"Accuracy : {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall   : {recall:.4f}")
print(f"F1-score : {f1:.4f}")

print()


# ==================================================
# 10. CONFUSION MATRIX
# ==================================================

cm = confusion_matrix(
    y_test,
    y_pred
)


print("Confusion Matrix:")
print(cm)