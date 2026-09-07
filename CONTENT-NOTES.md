# 확인할 내용

- 프로필 타이틀은 Radar Systems & Remote Sensing Engineer로 확정했습니다. Current areas of work는 Radar systems, Signal processing, Field deployment로 구성하며 SDR, SBC, 현장용 하드웨어와 불안정 사면의 IQ 데이터 처리를 설명합니다.
- 사이트에 등록된 논문 3편의 날짜는 IEEE Xplore의 Date of Publication으로 확인했습니다: passive-radar 2023-01-31 (10032709), lpi-radar 2023-02-06 (10038535), sar-jamming 2024-11-14 (10752943). 뉴스와 Publications에 동일하게 적용하며 논문 목록과 상세 화면에는 월·연도를 표시합니다. 전체 저자 정보는 원문을 기준으로 추가 확인할 수 있습니다.
- Google Scholar 프로필(6WOR4DkAAAAJ)에는 총 7개 항목이 있습니다. 현재 Publications에는 기존 IEEE 저널 논문 3편이 등록되어 있으며 EuRAD 포스터 논문은 News에서 소개합니다.
- 사용자 최종 확인: 2026년 7월 10일~8월 9일 그린란드에서 ground-based GNSS passive radar 장비를 설치하고 불안정하다고 보고된 사면의 데이터를 수집했습니다. News와 Latest Update에 반영했습니다.
- 결혼 소식은 2025-06-21, Virginia Tech 도착 소식은 2025-08-11로 date와 표시 날짜를 맞췄습니다. 뉴스 제목은 링크 없는 볼드체이며 작은 설명을 표시합니다. Minsun 이름에는 https://www.minsun.kim/ 링크를 유지합니다.
- NASA 문서는 원래 주석 처리된 비활성 파일로 그대로 보존했습니다. 활성화하지 않았습니다. 활성 프로젝트는 4개입니다.
- Blog에는 글을 만들어 넣지 않았습니다. 현재 참고 사이트와 동일하게 상단 메뉴에는 노출하지 않습니다.
- 참고 사이트 https://www.minsun.kim/ 의 2026-09-05 실시간 HTML 구조를 기준으로 구성했습니다. 캐시된 과거 홈의 Latest Project와 Recent Writing은 현재 홈에서 빠져 있어 적용하지 않았습니다.


## Greenland case study — 2026-09-07

Projects now holds the complete case study. `/project/` and the old NNA post redirect to `/projects/`. The historical post date is retained only to preserve its record; it is not presented as the project start date.

Sources checked: office machine `jhbang@mull680:/mnt/ssd/data/_KB/` (HEAD c143791), particularly objective, site_qaarusuup, system, products, note_vs_code, claims and limits. The text sources match the local Project_KnowledgeBase reading copy. Claims.md is an unreviewed draft; do not quote its performance numbers as established results.

Selected photo originals in `~/Downloads/Images_for_PersonalWebSite`:
- IMG_4389.JPG: hero / field installation with slope context.
- IMG_4166.HEIC: target slope (also explicitly selected as representative in the KB).
- IMG_4387.JPG: instrument setup.
- IMG_4383.JPG: hands working on electronics.
- IMG_4163.HEIC: complete instrument and antenna paths.
Photos decoded/orientation-corrected and exported to JPEG at max 1800 px, no content retouching. CSS controls the displayed crop.

Research images: G11 capture 20260803_120011, current office `~/sdr/D1_deliver/20260803_120011_SAR_Qaarusuup_G11/`. Original PNGs copied without changing pixels, axes or scales:
- sar-flat.png ← 1b_SAR_image_flat_uncorrected.png
- sar-terrain.png ← 1_SAR_image_terrain_corrected.png (SHA256 ec47f363871cf4ebd81b3cec7fde4e8ee6de8a8c8d163721b1724d863df6054a)
- sar-dem.png ← 3_overlay_SAR_on_DEM_with_waterline.png (SHA256 717711351b49ab7706822d8877f17e6770d7763ad83e141de3ea4d3711a0542c)
The local SAR and overlay copies were hash-verified against the office machine.

range-doppler.png re-renders the actual office binary `/mnt/ssd/data/20260803_Qaarusuup/Slope_az332/RDM_120011/USRP_L5Q_RDM_20260803_120011_prn11_3000msCPI_ECA_tap30.bin`. Same normalization as render_rdm.py: 10 log10(P/max(P)), [-45,0] dB; nearest-neighbour rendering, viridis palette; only the displayed y-range is limited to 0–3 km, explicitly stated in caption. 20 x 3 s CPI = 60 s integration; peak 1.3190868 km. Do not confuse this RDM integration with the approximately 597 s SAR aperture. This is not an image reconstruction from the averaged RDM; SAR uses the complex pulse data.

Public wording intentionally excludes: deformation already measured; alerting/tsunami prediction; guaranteed 2027 deployment; unsupported funding/novelty/performance claims; absolute backscatter values and retired consensus sigma0 maps. The old campaign PDF contains an incorrect two-channel block diagram; the page instead uses simplified, correct antenna/receiver/computer paths confirmed in system.md. No raw IQ, private KB, or unreviewed numerical claim ledger is included in the website.
