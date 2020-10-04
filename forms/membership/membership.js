
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let memberName = ""


btnFirstName.onclick=function(){
  let memberName = inptMembership.value
 if (members.includes(memberName)) {
    lblIsMember.hidden = false
    lblIsMember.textContent = "That user is a member!"
   } else {
    lblIsMember.hidden = false
    lblIsMember.textContent = "That user is not a member, please try again."
    members.push(memberName)
  }
}

Button2.onclick=function(){
  ChangeForm(calculator)
}
