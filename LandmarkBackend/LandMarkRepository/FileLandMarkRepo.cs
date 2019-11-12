using System;
using System.IO;
using System.Collections.Generic;
using LandMarkDataContract;
using Newtonsoft.Json;

namespace LandMarkRepository
{
    public class FileLandMarkRepo : ILandMarkRepo
    {
        private const string _fileName = "MapRepo.json";
        public void AddLandMark(LandMark landMark)
        {
            var landmarks = GetAllLandMarks()??new List<LandMark>();
            landmarks.Add(landMark);
            using (StreamWriter file = File.CreateText(_fileName))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, landmarks);
            }

        }

        public List<LandMark> GetAllLandMarks()
        {
            List<LandMark> landmarks;
            if (!File.Exists(_fileName))
                return null;
            using (StreamReader file = File.OpenText(_fileName))
            {
                JsonSerializer serializer = new JsonSerializer();
                landmarks = (List<LandMark>)serializer.Deserialize(file, typeof(List<LandMark>));
            }
            return landmarks;
        }
    }
}
