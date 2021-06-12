package models

import (
         "time"
       )

type Type struct {
    Id int `json:"id"`
    Type string `json: "type"`
    Code string `json: "code"`
}

type Entry struct {
    Id int `json:"id"`
    Severety string `json: "severety"`
    Body string `json: "body"`
    Header string `json: "header"`
    Ip string `json: "ip"`
    CreatedAt    time.Time `json:"created_at" gorm:"<-:create gorm:"<-:update`
    UpdatedAt    time.Time `json:"updated_at" gorm:"<-:create gorm:"<-:update`
    DeletedAt time.Time `json:"deleted_at" gorm:"<-:create gorm:"<-:update`
    TypeId int `json:"type_id" gorm:"foreignKey:TypeRefer" constraint:OnUpdate:CASCADE,OnDelete:SET NULL;`
    Type Type `json:",omitempty" gorm:"foreignKey:TypeId"`
}


