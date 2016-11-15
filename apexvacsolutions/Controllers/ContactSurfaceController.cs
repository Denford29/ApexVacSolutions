using System;
using apexvacsolutions.Models;
using System.Linq;
using System.Net.Mail;
using System.Reflection;
using System.Web.Mvc;
using Umbraco.Core.Logging;
using Umbraco.Web;
using Umbraco.Web.Mvc;

namespace apexvacsolutions.Controllers
{
    public class ContactSurfaceController : SurfaceController
    {
        /// <summary>
        /// get the contact form
        /// </summary>
        /// <returns></returns>
        public ActionResult GetContactForm()
        {
            return PartialView("Master/ContactForm");
        }

        [HttpPost]
        public ActionResult ContactSubmit(ContactModel formContactModel)
        {
            ////capthca code to check form
            //var formData = Request.Form;
            //var captchaRequest = formData["g-recaptcha-response"];
            //if (string.IsNullOrWhiteSpace(captchaRequest) || !ModelState.IsValid)
            //{
            //    TempData["contactError"] =
            //        "Opps... Form Error, There was an error with your details please check them and try again.";
            //    return CurrentUmbracoPage();
            //}

            var emailAddress = "denfordmutseriwa@yahoo.com";
            var siteSetting = Umbraco.TypedContentAtRoot().FirstOrDefault(x => x.ContentType.Alias == "GlobalSettings");
            if (siteSetting != null && siteSetting.Id > 0 && siteSetting.Descendants("SiteDetails").Any())
            {
                var siteDetailsPage = siteSetting.Descendants("SiteDetails").FirstOrDefault();
                if (siteDetailsPage != null && siteDetailsPage.Id > 0)
                {
                    if (siteDetailsPage.HasProperty("siteContactEmail") && siteDetailsPage.HasValue("siteContactEmail"))
                    {
                        emailAddress = siteDetailsPage.GetPropertyValue("siteContactEmail").ToString();
                    }
                }
            }
            var hasEmailError = false;
            try
            {
                const string mailBody = "Thank you for contacting us on Apex Vac Solutions, " +
                    "we have got your enquiry and a member of the team will get back to you as soon as posible." +
                    "<br /> <br />Regards, <br /> Web Team";
                var userEmailMessage = new MailMessage
                {
                    Subject = "Your Contact on Apex Vac Solutions",
                    Body = mailBody,
                    From = new MailAddress("contact@apexvacsolutions.com.au", "Admin")
                };
                userEmailMessage.To.Add(new MailAddress(formContactModel.EmailAddress.Trim(),
                    formContactModel.FullName.Trim()));
                userEmailMessage.Bcc.Add("denfordmutseriwa@yahoo.com");
                userEmailMessage.IsBodyHtml = true;
                var userSmtpClient = new SmtpClient();
                userSmtpClient.Send(userEmailMessage);
            }
            catch (Exception ex)
            {
                var errorMessage = ex.Message + "<br /><br />" + ex.StackTrace + "<br /><br />" + ex.InnerException;
                LogHelper.Error(MethodBase.GetCurrentMethod().DeclaringType, errorMessage, ex);

                var errorEmaillMessage = new MailMessage
                {
                    Subject = "Website error on Apex Vac Solutions.",
                    Body = errorMessage,
                    From = new MailAddress("contact@apexvacsolutions.com.au", "Web Team")
                };
                errorEmaillMessage.To.Add(new MailAddress("denfordmutseriwa@yahoo.com", "Denford"));
                errorEmaillMessage.IsBodyHtml = true;
                var errorSmtpClient = new SmtpClient();
                errorSmtpClient.Send(errorEmaillMessage);

                hasEmailError = true;
            }

            try
            {
                string adminMailBody =
                    "The contact form has been submitted on the website with the details below. <br /><br />";
                adminMailBody += "Full Name : " + formContactModel.FullName.Trim() + "<br />";
                adminMailBody += "Email Address : " + formContactModel.EmailAddress.Trim() + "<br />";
                adminMailBody += "Phone Number : " + formContactModel.PhoneNumber.Trim() + "<br />";
                adminMailBody += "Message : " + formContactModel.Message.Trim() + "<br />";
                adminMailBody += "<br />Regards,<br />Web Team";

                var adminEmaillMessage = new MailMessage
                {
                    Subject = "The contact form has been submited on Apex Vac Solutions",
                    Body = adminMailBody,
                    From = new MailAddress("contact@apexvacsolutions.com.au", "Web Team")
                };
                adminEmaillMessage.To.Add(new MailAddress(emailAddress, "Admin"));
                adminEmaillMessage.Bcc.Add("denfordmutseriwa@yahoo.com");
                adminEmaillMessage.IsBodyHtml = true;
                var adminSmtpClient = new SmtpClient();
                adminSmtpClient.Send(adminEmaillMessage);
            }
            catch (Exception ex)
            {
                var errorMessage = ex.Message + "<br /><br />" + ex.StackTrace + "<br /><br />" + ex.InnerException;
                LogHelper.Error(MethodBase.GetCurrentMethod().DeclaringType, errorMessage, ex);

                var errorEmaillMessage = new MailMessage
                {
                    Subject = "Admin email error on Apex Vac Solutions",
                    Body = errorMessage,
                    From = new MailAddress("contact@apexvacsolutions.com.au", "Web Team")
                };
                errorEmaillMessage.To.Add(new MailAddress("denfordmutseriwa@yahoo.com", "Denford"));
                errorEmaillMessage.IsBodyHtml = true;
                var errorSmtpClient = new SmtpClient();
                errorSmtpClient.Send(errorEmaillMessage);

                hasEmailError = true;
            }

            if (hasEmailError)
            {
                TempData["contactError"] =
                    "Opps... Contact Error, there was a problem submitting your request.";
                return RedirectToCurrentUmbracoPage();
            }
            else
            {
                TempData["contactSuccess"] =
                "Your contact request has been submitted successfully, a member of the team will get in touch with you shortly...";
                return CurrentUmbracoPage();
            }
        }

    }
}