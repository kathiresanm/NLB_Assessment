namespace Students.API.Model
{
    /// <summary>
    /// Class that encapsulates "Student" object.
    /// </summary>
    public class Student
    {
        /// <summary>
        /// Gets or sets the student's name.
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// Gets or sets the student's age.
        /// </summary>
        public int Age { get; set; }

        /// <summary>
        /// Gets or sets the student's hobbies.
        /// </summary>
        public IEnumerable<string>? Hobbies { get; set; }
    }
}
