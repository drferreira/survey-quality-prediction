# Create index
set.seed(1234)

# Split dataframe
# 70% Training
# 30% Test
ind <- sample(2, nrow(base_disc), replace = TRUE, prob = c(0.7, 0.3))
train <- base_disc[ind == 1, ]
test <- base_disc[ind == 2, ]