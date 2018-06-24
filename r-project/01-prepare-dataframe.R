# Remove fields
base_disc$recruitment_number <- NULL
base_disc$acronym <- NULL
base_disc$mode <- NULL
base_disc$type <- NULL
base_disc$category <- NULL
base_disc$interviewer <- NULL
base_disc$current_status <- NULL
base_disc$current_status_date <- NULL
base_disc$creation_date <- NULL
base_disc$paper_realization_date <- NULL
base_disc$paper_interviewer <- NULL
base_disc$last_finalization_date <- NULL

# Replace empty field
base_disc[is.na(base_disc)]<-".NA"

#Convert dataframe to character
base_disc <- data.frame(lapply(base_disc, as.character), stringsAsFactors = TRUE)