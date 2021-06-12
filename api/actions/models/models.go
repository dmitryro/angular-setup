package models

import (
         "time"
       )

type Action struct {
    Id int `json:"id"`
    ProfileKey string `json: "profile_key"`
    CreatedAt    time.Time `json:"created_at" gorm:"<-:create gorm:"<-:update`
    UpdatedAt    time.Time `json:"updated_at" gorm:"<-:create gorm:"<-:update`
    DeletedAt time.Time `json:"deleted_at" gorm:"<-:create gorm:"<-:update`
}

