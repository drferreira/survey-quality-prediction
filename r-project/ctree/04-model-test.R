# Load Libs
library(mda)

# Check training confusion table
confusion_tree_train <- confusion(train_tree_pred, train$DISC9)
View(confusion_tree_train)

# Check test confusion table
confusion_tree_test <- confusion(test_tree_pred, test$DISC9)
View(confusion_tree_test)

