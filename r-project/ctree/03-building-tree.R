# Load Libs
library(party)

# Build (Hardcode variables)
tree <- ctree(DISC9 ~ DISC6 + DISC7 + DISC8 + DISC10 + DISC11 + DISC12 + DISC13 + DISC14 + DISC15
              + DISC0a + DISC16a + DISC16b + DISC16c + DISC16d + DISC16e + DISC16f + DISC16g + DISC16h + DISC16i + DISC16j 
              + DISC16k + DISC16l + DISC16m + DISC16n + DISC16o + DISC16p, data = train)

# Build prediction
train_tree_pred <- predict(tree, newdata = train)
test_tree_pred <- predict(tree, newdata = test)