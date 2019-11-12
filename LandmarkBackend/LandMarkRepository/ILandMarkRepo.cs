using System;
using System.Collections.Generic;
using System.Text;
using LandMarkDataContract;
namespace LandMarkRepository
{
    public interface ILandMarkRepo
    {
        void AddLandMark(LandMark landMark);
        List<LandMark> GetAllLandMarks();

    }
}
