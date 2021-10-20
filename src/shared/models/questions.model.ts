export interface Questions {
    title:string,
    quizId:string,
    text:string,
          completed:boolean,
          answers:[
                {text:string, correct:boolean},
                {text:string, correct:boolean},
                {text:string, correct:boolean},
                {text:string, correct:boolean},
 ]

}
