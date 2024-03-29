﻿using _4.het.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _4.het.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/all")]
        public ActionResult M1()
        {
            Models.HajostesztContext context = new Models.HajostesztContext();
            var kérdések = from x in context.Questions select x.QuestionText;

            return new JsonResult(kérdések);
        }
    }
}
