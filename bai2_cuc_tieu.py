def grad(x):
    return x**2 - 1


def cost(x):
    return (1/3)*x**3 - x


def myGD1(x0, eta):
    x = [x0]

    for it in range(100):
        x_new = x[-1] - eta * grad(x[-1])

        if abs(grad(x_new)) < 1e-3:
            x.append(x_new)
            break

        x.append(x_new)

    return x, it


# Giá trị ban đầu
x0 = 2
eta = 0.1

# Chạy Gradient Descent
x, it = myGD1(x0, eta)

# Kết quả
print("Bai 2:")
print("x gan cuc tieu =", x[-1])
print("Gia tri cuc tieu =", cost(x[-1]))
print("So lan lap =", it + 1)