# Build (Hardcode variables)
tree <- ctree(DISC9 ~ DISC6 + DISC7 + DISC8, data = train)

#Plot Tree
plot(tree)

# Build prediction
train_pred <- predict(tree, newdata = train)
test_pred <- predict(tree, newdata = test)