# Import dataframe
library(readxl)
database <- read_excel("database-survey-disc.xlsx")

# Remove fields
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

# Replace empty field
database[is.na(database)]<-".NA"

#Convert dataframe to character
database <- data.frame(lapply(database, as.character), stringsAsFactors = TRUE)