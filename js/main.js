var quotes=[
    "Be yourself; everyone else is already taken.",
    "You know youre in love when you cant fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Dont walk in front of me… I may not follow Dont walk behind me… I may not leadWalk beside me… just be my friend",
    "If you tell the truth, you dont have to remember anything.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "I am so clever that sometimes I dont understand a single word of what I am saying."
]

function getquotes(){
    var random = Math.floor(Math.random()*quotes.length)
    document.getElementById('quotes-p').innerHTML = '<p>'+quotes[random]+'</p>'
}