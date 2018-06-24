# Load Libs
library(party)

# Build (Hardcode variables)
tree <- ctree(DISC9 ~ DISC6 + DISC7 + DISC8, data = train)

# Build prediction
train_pred <- predict(tree, newdata = train)
test_pred <- predict(tree, newdata = test)