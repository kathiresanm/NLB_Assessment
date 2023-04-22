using Microsoft.AspNetCore.Mvc;
using Students.API.Model;
using Students.API.Utils.Builder;

namespace Students.API.Controllers
{
    /// <summary>
    /// Data API controller that encapsulates the Student resource.
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private readonly ILogger<DataController> _logger;

        /// <summary>
        /// Constructs the Data controller.
        /// </summary>
        /// <param name="logger">Logger object of type <see cref="ILogger"/></param>
        public DataController(ILogger<DataController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Gets the Student summary object.
        /// </summary>
        /// <returns></returns>
        [HttpGet(Name = "GetStudents")]
        public StudentSummary Get()
        {
            return new StudentSummary { Students = StudentBuilder.CreateMockStudents() };
        }
    }
}