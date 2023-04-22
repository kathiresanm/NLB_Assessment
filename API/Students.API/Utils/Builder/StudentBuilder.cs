using Students.API.Model;

namespace Students.API.Utils.Builder
{
    public class StudentBuilder
    {
        /// <summary>
        /// Creates and returns enumerable mocked student data.
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<Student> CreateMockStudents()
        {
            return new []
            {
                new Student() { Name = "Alice", Age = 20, Hobbies = new [] { "reading", "swimming", "coding" } },
                new Student() { Name = "Bob", Age = 22, Hobbies = new [] { "painting", "dancing", "singing" } }
            };
        }
    }
}
