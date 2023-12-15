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
  getEmptyMail,
  getDefaultFilter,
  getLoggedInUser,
  getMailsFromLoggedInUser
  // getFilterFromQueryString
}

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus"
}

function getLoggedInUser() {
  return loggedinUser
}

function getMailsFromLoggedInUser() {
  return asyncStorageService.query(MAIL_KEY).then((mails) => {
    return mails.filter(
      (mail) => mail.from.toLowerCase() === loggedinUser.email.toLowerCase()
    )
  })
}

function query(filterBy) {
  const { to, query } = filterBy

  return asyncStorageService.query(MAIL_KEY).then((mails) => {
    let filteredMails = mails

    // Filter by 'to' (recipient)
    if (to) {
      filteredMails = filteredMails.filter(
        (mail) => mail.to.toLowerCase() === to.toLowerCase()
      )
    }

    // Filter out mails sent by the logged-in user
    const loggedInUserMails = filteredMails.filter(
      (mail) => mail.from.toLowerCase() === loggedinUser.email.toLowerCase()
    )
    filteredMails = filteredMails.filter(
      (mail) => !loggedInUserMails.includes(mail)
    )

    // Filter by 'query' (combined subject and body)
    if (query) {
      const queryLowerCase = query.toLowerCase()
      filteredMails = filteredMails.filter(
        (mail) =>
          mail.subject.toLowerCase().includes(queryLowerCase) ||
          mail.body.toLowerCase().includes(queryLowerCase)
      )
    }

    return filteredMails
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

function getEmptyMail(subject = "", body = "", isRead, from, sentAt, isStar) {
  return {
    subject,
    body,
    isRead,
    isStar,
    sentAt,
    removedAt: null,
    isTrash: false,
    from,
    to: "user@appsus.com"
  }
}

function getDefaultFilter() {
  const { email } = loggedinUser
  return { to: email }
}

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

    mails.push(
      _createMail(
        "John Doe",
        "Welcome to our newsletter, Thanks for subscribing to our newsletter! Stay tuned for exciting updates.",
        true,
        "johndoe@gmail.com",
        Date.now(),
        true
      )
    )
    mails.push(
      _createMail(
        "Amazon",
        "Your Order Confirmation, Your order has been confirmed. You can track your shipment using the provided link.",
        false,
        "amazon@gmail.com",
        Date.now() - 2 * 60 * 60 * 1000,
        false
      )
    )
    mails.push(
      _createMail(
        "Jane Smith",
        "Invitation to a Party, You're invited to our annual party this weekend. Don't miss the fun!",
        false,
        "janesmith@gmail.com",
        Date.now() - 4 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Tech News",
        "Weekly Technology Digest, Catch up on the latest in technology with our weekly digest.",
        false,
        "technews@gmail.com",
        Date.now() - 5 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Bank of Usa",
        "Important Account Update, Please review your recent account activity. If you notice any unauthorized transactions, contact us immediately.",
        false,
        "bankofusa@gmail.com",
        Date.now() - 9 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Travel Agency",
        "Exclusive Travel Deals, Explore our exclusive travel deals and plan your next adventure!",
        true,
        "travelagency@gmail.com",
        Date.now() - 12 * 86400000,
        true
      )
    )
    mails.push(
      _createMail(
        "Health & Wellness",
        "Tips for a Healthy Lifestyle,Discover tips and tricks for maintaining a healthy lifestyle.",
        false,
        "healthwellness@gmail.com",
        Date.now() - 12 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Job Opportunity",
        "Exciting Job Offer Inside, We're impressed with your profile and would like to offer you a job opportunity at our company.",
        false,
        "jobopportunity@gmail.com",
        Date.now() - 16 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Netflix",
        "New Releases This Month ,Check out the latest movies and TV shows added to our library this month.",
        false,
        "netflix@gmail.com",
        Date.now() - 19 * 86400000,
        false
      )
    )
    mails.push(
      _createMail(
        "Fitness Guru",
        "30-Day Workout Challenge, Embark on a 30-day workout challenge for a healthier you.",
        true,
        "fitnessguru@gmail.com",
        Date.now() - 24 * 86400000,
        true
      )
    )
    mails.push(
      _createMail(
        "Tech Blog",
        "Stay updated on the latest trends and innovations in the tech world.",
        false,
        "techblog@gmail.com",
        Date.now() - 27 * 86400000,
        false
      )
    )

    mails.push(
      _createMail(
        "Foodie Magazine",
        "Explore mouth-watering recipes and culinary delights in our latest issue.",
        false,
        "foodiemag@gmail.com",
        Date.now() - 34 * 86400000,
        false
      )
    )

    mails.push(
      _createMail(
        "Fitness Tips",
        "Get expert tips and advice to help you reach your fitness goals.",
        true,
        "fitnesstips@gmail.com",
        Date.now() - 38 * 86400000,
        true
      )
    )

    mails.push(
      _createMail(
        "Gaming News",
        "Discover the latest news, releases, and updates from the gaming world.",
        false,
        "gamingnews@gmail.com",
        Date.now() - 40 * 86400000,
        false
      )
    )

    mails.push(
      _createMail(
        "Travel Adventures",
        "Explore incredible travel destinations and plan your next adventure.",
        false,
        "traveladventures@gmail.com",
        Date.now() - 48 * 86400000,
        false
      )
    )

    storageService.saveToStorage(MAIL_KEY, mails)
  }
}

function _createMail(subject, body = "", isRead, from, sentAt, isStar) {
  const mail = getEmptyMail(subject, body, isRead, from, sentAt, isStar)
  mail.id = utilService.makeId()
  return mail
}
