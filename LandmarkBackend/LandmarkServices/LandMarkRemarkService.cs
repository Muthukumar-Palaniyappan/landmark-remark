using System;
using System.Collections.Generic;
using LandMarkDataContract;
using LandMarkRepository;

namespace LandmarkServices
{
  public class LandMarkRemarkService : ILandMarkRemarkService
  {
    private List<LandMark> _landMarkRecordSet { get; set; }
        private readonly ILandMarkRepo _landMarkRepo;

    public LandMarkRemarkService(ILandMarkRepo landMarkRepo)
    {
      _landMarkRepo = landMarkRepo ?? throw new ArgumentNullException(nameof(landMarkRepo));
    }
    public void AddLandMark(LandMark landmark)
    {
      _landMarkRepo.AddLandMark(landmark);
    }

    public List<LandMark> GetAllLandMarks()
    {
      return _landMarkRepo.GetAllLandMarks();
    }
  }
}
