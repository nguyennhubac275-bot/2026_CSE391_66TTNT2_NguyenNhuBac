import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

# 1. Đọc dữ liệu
df = pd.read_csv("data.csv")

# 2. Tách Features và Target
X = df[
    [
        "dien_tich_m2",
        "so_phong_ngu",
        "khoang_cach_tt_km",
        "mat_tien"
    ]
]

y = df["gia_ty_vnd"]

# 3. Chia dữ liệu Train/Test
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# 4. Tạo mô hình
model = LinearRegression()

# 5. Huấn luyện
model.fit(X_train, y_train)

# 6. Dự đoán
y_pred = model.predict(X_test)

# 7. Đánh giá
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print("=== KẾT QUẢ ĐÁNH GIÁ MÔ HÌNH ===")
print(f"MAE  : {mae:.3f} tỷ VNĐ")
print(f"RMSE : {rmse:.3f} tỷ VNĐ")
print(f"R² Score : {r2:.4f}")

# 8. In hệ số
print("\n=== HỆ SỐ HỒI QUY ===")

for col, coef in zip(X.columns, model.coef_):
    print(f"- {col:<20}: {coef:.4f}")

print(f"- Intercept (b)     : {model.intercept_:.4f}")

# 9. Dự đoán căn nhà mới
nha_moi = pd.DataFrame(
    [[75, 3, 5.0, 1]],
    columns=[
        "dien_tich_m2",
        "so_phong_ngu",
        "khoang_cach_tt_km",
        "mat_tien"
    ]
)

gia_du_doan = model.predict(nha_moi)[0]

print(
    f"\n=> Giá dự đoán cho căn nhà mẫu: "
    f"{gia_du_doan:.2f} tỷ VNĐ"
)