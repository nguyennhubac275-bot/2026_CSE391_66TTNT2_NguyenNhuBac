import numpy as np

class Perceptron:

    # Hàm khởi tạo
    def __init__(self, learning_rate=1.0, epochs=10):

        self.learning_rate = learning_rate
        self.epochs = epochs

        # Trọng số
        self.weights = None

        # Bias
        self.bias = 0


    # Hàm huấn luyện
    def fit(self, X, y):

        # Khởi tạo trọng số bằng 0
        self.weights = np.zeros(X.shape[1])

        # Khởi tạo bias
        self.bias = 0

        # Lặp qua số epoch
        for epoch in range(self.epochs):

            # Duyệt từng mẫu dữ liệu
            for xi, yi in zip(X, y):

                # Tính w^T*x + bias
                linear_output = np.dot(xi, self.weights) + self.bias

                # Dự đoán
                if linear_output >= 0:
                    prediction = 1
                else:
                    prediction = -1

                # Nếu dự đoán sai thì cập nhật
                if prediction != yi:

                    self.weights += (
                        self.learning_rate * yi * xi
                    )

                    self.bias += (
                        self.learning_rate * yi
                    )


    # Hàm dự đoán
    def predict(self, X):

        # Tính w^T*x + bias
        linear_output = (
            np.dot(X, self.weights) + self.bias
        )

        # Trả về nhãn
        return np.where(
            linear_output >= 0,
            1,
            -1
        )

# Dữ liệu huấn luyện
X = np.array([
    [2, 3],
    [1, 1],
    [-1, -2],
    [-2, -3]
])


# Nhãn
y = np.array([
    1,
    1,
    -1,
    -1
])


# Tạo mô hình
model = Perceptron(
    learning_rate=1.0,
    epochs=10
)


# Huấn luyện
model.fit(X, y)


# In trọng số
print("Trọng số sau khi huấn luyện:")
print(model.weights)

print()

# In bias
print("Bias:")
print(model.bias)

print()


# Dữ liệu mới
X_new = np.array([
    [3, 2],
    [-2, -1],
    [2, 1],
    [-1, -3]
])


# Dự đoán
predictions = model.predict(X_new)


# In kết quả
print("Dự đoán dữ liệu mới:")

for i in range(len(X_new)):

    print(
        f"{X_new[i]} -> "
        f"nhãn {predictions[i]}"
    )