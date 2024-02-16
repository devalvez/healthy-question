"use client"
import React from "react";
import { Template } from "@/components/custom/template/template";
import { Lessonbar } from "@/components/custom/lessonbar/lessonbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress"
import Quiz from 'react-quiz-component';
// import { quiz } from './quiz.tsx';

const quiz =  {
  "appLocale" : {
    "singleSelection": "Apenas uma resposta",
    "landingHeaderText" : " <questionLength> Perguntas " ,
    "question" : " Pergunta " ,
    "startQuizBtn" : " Iniciar questionário " ,
    "resultFilterAll" : " Todos " ,
    "resultFilterCorrect" : " Correto " ,
    " resultFilterIncorrect" : " Incorreto " ,
    "prevQuestionBtn" : " Prev " ,
    "nextQuestionBtn" : " Próximo " ,
    "resultPageHeaderText" : " Você completou o questionário. Você acertou <correctIndexLength> em <questionLength> perguntas. " 
 },
  "quizTitle": "Teste da aula 1",
  "quizSynopsis": "Como manter uma alimentação saudável no ambiente de trabalho corporativo?",
  "nrOfQuestions": "4",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "10"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "30"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      "questionType": "photo",
      "answerSelectionType": "single",
      "answers": [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "What are the advantages of React JS?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      ],
      "correctAnswer": [1, 2, 4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
  ]
} 

const setQuizResult = () => {
  // console.log(obj);
  alert("Próxima aula");
  // YOUR LOGIC GOES HERE
}

const Lessons = () => {
  return (
    <div className="h-[400px]">
      <Template>
        <div className="gap-2 grid grid-cols-1 lg:flex xl:grid-cols-2 md:gap-5">
          
          {/* <div className="w-screen h-[240px] md:h-[360px] lg:h-[480px] xl:h-[720px] md:w-full ">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GteoCD0UbAc?si=ofSKUQee7169AwDH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div> */}

          <div className="w-full">
            <Quiz quiz={quiz} timer={60} showDefaultResult={false} onComplete={setQuizResult}/>
          </div>

          <Tabs defaultValue="lessons" className="w-full lg:w-[400px]">

            <TabsList>
              <TabsTrigger value="lessons">Aulas</TabsTrigger>
              <TabsTrigger value="comments">Comentários</TabsTrigger>
            </TabsList>
                <TabsContent value="lessons" className="gap-2">
                  <div className="pt-2 pb-2">
                    <Progress value={33} />
                  </div>
                  <div className="pb-2"> 
                    <Lessonbar />
                  </div>

                </TabsContent>
            <TabsContent value="comments">Change your password here.</TabsContent>
          </Tabs>
        </div>
        <div>
        </div>
      
      </Template>
    </div>
  );
};

export default Lessons;
