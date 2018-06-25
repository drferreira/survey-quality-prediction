# Import dataframe
library(readxl)
database <- read_excel("database-survey-disc.xlsx")

# Remove fields identifier
database$recruitment_number <- NULL
database$acronym <- NULL
database$mode <- NULL
database$type <- NULL
database$category <- NULL
database$interviewer <- NULL
database$current_status <- NULL
database$current_status_date <- NULL
database$creation_date <- NULL
database$paper_realization_date <- NULL
database$paper_interviewer <- NULL
database$last_finalization_date <- NULL

# Remove fields comment
database$DISC6_comment <- NULL
database$DISC7_comment <- NULL
database$DISC8_comment <- NULL
database$DISC9_comment <- NULL
database$DISC10_comment <- NULL
database$DISC11_comment <- NULL
database$DISC12_comment <- NULL
database$DISC13_comment <- NULL
database$DISC14_comment <- NULL
database$DISC15_comment <- NULL
database$DISC0a_comment <- NULL
database$DISC16_comment <- NULL

# Open question
database$DISC16q <- NULL

database$DISC16q_comment <- NULL
database$DISC17_comment <- NULL
database$DISC18_comment <- NULL
database$DISC19_comment <- NULL
database$DISC20_comment <- NULL
database$DISC21_comment <- NULL
database$DISC22_comment <- NULL
database$DISC23_comment <- NULL
database$DISC24_comment <- NULL

# Replace empty field
database[is.na(database)]<-".NA"

#Convert dataframe to character
database <- data.frame(lapply(database, as.character), stringsAsFactors = TRUE)