using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IskolaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        //Api/Teszt/Udvozles
        [HttpGet]
        [Route("Udvozles/{nev}")]
        public string Udvozles(string nev = "Felhasználó")
        {
            return $"Hello {nev}!";
        }
        //Api/Teszt/Negyzete/5
        //[HttpGet]
        //1-nél több HTTP végpontnál meg kell adni a ROUTE útvonalat
        //[Route("Negyzete/{szam}")]
        [HttpGet("Negyzete/{szam}")]
        public string Hatvanyozas(double szam)
        {
            return Math.Pow(szam, 2).ToString();
        }
    }
}
