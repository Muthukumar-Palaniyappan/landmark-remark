using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using LandmarkServices;
using LandMarkDataContract;

namespace LandmarkBackend.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class LandMarkController : Controller
    {
        private readonly ILandMarkRemarkService _landMarkRemarkService;


        public LandMarkController(ILandMarkRemarkService landMarkRemarkService)
        {
            _landMarkRemarkService = landMarkRemarkService ?? throw new ArgumentNullException(nameof(landMarkRemarkService));
        }

        // GET api/values
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public List<LandMark> Get()
        {
            return _landMarkRemarkService.GetAllLandMarks();
        }



        // POST api/values
        [HttpPost]
        [EnableCors("AllowOrigin")]
        public IActionResult Post([FromBody] LandMark landMark)
    {
      if (landMark == null)
        return BadRequest("Argument is null");
      _landMarkRemarkService.AddLandMark(landMark);
      return Ok();
    }


  }
}
