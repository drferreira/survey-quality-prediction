# Load Libs
library(mda)

# Check training confusion table
confusion_naive_train <- confusion(train_naive_pred$class, train$DISC9)
View(confusion_naive_train)

# Check test confusion table
confusion_naive_test <- confusion(test_naive_pred$class, test$DISC9)
View(confusion_naive_test)