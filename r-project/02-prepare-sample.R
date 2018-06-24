# Create index
set.seed(1234)

# Split dataframe
# 70% Training
# 30% Test
ind <- sample(2, nrow(database), replace = TRUE, prob = c(0.7, 0.3))
train <- database[ind == 1, ]
test <- database[ind == 2, ]