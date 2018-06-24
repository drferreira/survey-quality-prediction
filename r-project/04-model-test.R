# Load Libs
library(mda)

# Test model training
train_pred <- predict(tree, newdata = train)

# Test model test
test_pred <- predict(tree, newdata = test)

# Check training confusion table
confusion(train_pred, train$DISC9)

# Check test confusion table
confusion(test_pred, test$DISC9)