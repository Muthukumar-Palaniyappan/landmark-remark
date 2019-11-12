using LandMarkDataContract;
using System.Collections.Generic;

namespace LandmarkServices
{
  public interface ILandMarkRemarkService
  {
    void AddLandMark(LandMark landmark);

    List<LandMark> GetAllLandMarks();

  }
}