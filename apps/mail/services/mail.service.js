// mail service
import { utilService } from "../../../services/util.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { storageService } from "../../../services/storage.service.js"
const MAIL_KEY = "mailDB"
_createMails()

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyMail
  // getDefaultFilter,
  // getFilterFromQueryString
}

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus"
}

function query(filterBy) {
  return asyncStorageService.query(MAIL_KEY).then((mails) => {
    // if (filterBy.txt) {
    //   const regExp = new RegExp(filterBy.txt, "i")
    //   mails = mails.filter((mail) => regExp.test(mail.vendor))
    // }
    // if (filterBy.minSpeed) {
    //   mails = mails.filter((mail) => mail.maxSpeed >= filterBy.minSpeed)
    // }
    return mails
  })
}

function get(mailId) {
  return asyncStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
  return asyncStorageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) {
    return asyncStorageService.put(MAIL_KEY, mail)
  } else {
    return asyncStorageService.post(MAIL_KEY, mail)
  }
}

function getEmptyMail(subject = "", body = "", isRead) {
  return {
    subject,
    body,
    isRead: false,
    sentAt: Date.now(),
    removedAt: null,
    from: "momo@momo.com",
    to: "user@appsus.com"
  }
}

// function getDefaultFilter() {
//   return { txt: "", minSpeed: "", maxPrice: "" }
// }

// function getFilterFromQueryString(searchParams) {
//   const txt = searchParams.get("txt") || ""
//   const minSpeed = searchParams.get("minSpeed") || ""
//   const maxPrice = searchParams.get("maxPrice") || ""
//   return {
//     txt,
//     minSpeed,
//     maxPrice
//   }
// }

function _createMails() {
  let mails = storageService.loadFromStorage(MAIL_KEY)
  if (!mails || !mails.length) {
    mails = []
    mails.push(_createMail("football", "messi and ronaldo playing together"))
    mails.push(_createMail("basketball", "lebron james playing in miami", true))
    mails.push(_createMail("cars", "ferrari and lamboo racing"))
    mails.push(_createMail("Don POLO", "fuck u ma nigga"))
    storageService.saveToStorage(MAIL_KEY, mails)
  }
}

function _createMail(subject, body = "") {
  const mail = getEmptyMail(subject, body)
  mail.id = utilService.makeId()
  return mail
}

function hello() {
  console.log("hellp")
}
