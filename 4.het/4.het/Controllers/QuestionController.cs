using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _4.het.Controllers
{
    public class QuestionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public int M1()
        { HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }
        [ HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2( int sorszám)
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();


            if (kérdés==null) return BadRequest("Nincs ilyen kérdés!")
            {
                return new JsonResult(kérdés);
            }
        }
    }
}
