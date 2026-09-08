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
- IMG_4386.JPG: hero (2026-09-07). Instrument being set up with the target slope behind it; 16:9 crop y=400..1264 of the 1536x2048 original, no retouching. Replaces IMG_4389.JPG, whose frame was dominated by the solar panel.
- IMG_4178.HEIC: the unattended instrument on site; 16:9 crop y=1150..3559 of 4284x5712, resampled to 1800x1012.
- IMG_4389.JPG: earlier hero / field installation with slope context. No longer used on the page; field-team.jpg is retained in the repo but unreferenced.
- IMG_4166.HEIC: target slope (also explicitly selected as representative in the KB).
- IMG_4387.JPG: instrument setup.
- IMG_4383.JPG: hands working on electronics.
- IMG_4163.HEIC: complete instrument and antenna paths.
Photos decoded/orientation-corrected and exported to JPEG at max 1800 px, no content retouching. CSS controls the displayed crop.

Research images: G11 capture 20260803_120011. **Re-rendered 2026-09-07 with the corrected colour-bar label only.** The deliverable figures label the bar "SAR power [dB, common absolute scale]", which is internal shorthand: in SAR the squared magnitude is INTENSITY, and these figures plot 10 log10(P). The correct label, already adopted for the campaign deck v3, is "Radar intensity [dB]".

Re-rendered on the office machine with the deliverable command from `~/sdr/d1_deliver.sh` reproduced verbatim (same `$REF/sar_overlay.py`, same `--npz`, `--sim`, `--dem`, `--abs-db 136 164`, same `--tag`/`--subtitle`), adding only `--clabel "Radar intensity [dB]"`. That flag is documented in the script as "Cosmetic only; nothing else changes."

Control run: the re-rendered PNGs were differenced pixel-by-pixel against the originals. All three differ in exactly 5,927 pixels, confined to x 1860-1887, y 517-1083 of 2000x1600 — the rotated colour-bar label strip. Every other pixel is bit-identical. The images themselves, their axes and their scales are therefore unchanged.
- sar-flat.png ← 1b_SAR_image_flat_uncorrected.png, re-rendered
- sar-terrain.png ← 1_SAR_image_terrain_corrected.png, re-rendered (SHA256 d5acdd73d00b7aa615d54ca91c39874852019485f92bf9aea7f9f66f390678fe; pre-relabel original was ec47f363871cf4ebd81b3cec7fde4e8ee6de8a8c8d163721b1724d863df6054a)
- sar-dem.png ← 3_overlay_SAR_on_DEM_with_waterline.png, re-rendered (SHA256 6489bc241594ab33faeea71d5269eb00706162c03028f0cfa0147fb55b9231e3; pre-relabel original was 717711351b49ab7706822d8877f17e6770d7763ad83e141de3ea4d3711a0542c)

geometry-diagram.png is the figure from slide 3 of the campaign PDF, "What the passive radar measures", extracted losslessly as the single embedded raster on that page (pdfimages, 1584x993, unmodified). This is NOT the slide 5 "System overview" two-channel block diagram, which is the one known to be wrong and is still excluded. Slide 3 shows only observation geometry — direct path, satellite-to-slope, slope-to-receiver, and the satellite's motion — and is correct. It replaced a hand-drawn inline SVG of the same geometry.

range-doppler.png re-renders the actual office binary `/mnt/ssd/data/20260803_Qaarusuup/Slope_az332/RDM_120011/USRP_L5Q_RDM_20260803_120011_prn11_3000msCPI_ECA_tap30.bin`. Same normalization as render_rdm.py: 10 log10(P/max(P)), [-45,0] dB; nearest-neighbour rendering, viridis palette; only the displayed y-range is limited to 0–3 km, explicitly stated in caption. 20 x 3 s CPI = 60 s integration; peak 1.3190868 km. Do not confuse this RDM integration with the approximately 597 s SAR aperture. This is not an image reconstruction from the averaged RDM; SAR uses the complex pulse data.

Public wording intentionally excludes: deformation already measured; alerting/tsunami prediction; guaranteed 2027 deployment; unsupported funding/novelty/performance claims; absolute backscatter values and retired consensus sigma0 maps. The old campaign PDF's slide 5 contains an incorrect two-channel block diagram and is still excluded; the receiver chain shown on the page is instead the simplified, correct antenna/receiver/computer path confirmed in system.md. (Slide 3's geometry figure is a different, correct figure and is used — see above.) No raw IQ, private KB, or unreviewed numerical claim ledger is included in the website.


Site-wide Last Update is stored in `_data/site_meta.yml` as the content update date. Update it when publishing content changes; do not replace it with the visitor date or a rebuild timestamp. Body copy avoids en/em dashes; headings and Current areas separators may retain them.


Local refinement draft (not included in the approved baseline push 27b3630):
- Tool list and publication author-role labels checked against the existing linked CV (Google Docs export, 2026-09-07).
- Collapsible acquisition/validation text sourced from G11 PARAMETERS.txt and KB gates G-01/G-04/G-06. No quantitative resolution or absolute-radiometry claim added.
- Visual styles are isolated in _sass/_portfolio-refinement.scss. Original site content, project figure scales, and photograph pixels retained.

Daeha Scholarship news: June 2022 and US$1,500 supplied by user. English foundation name checked against linked CV. June 1 is only the sorting key; public date label is Jun.

2026-09-08: Power subsystem components supplied by user (solar panel, charge controller, battery, low-voltage disconnector). Diagram is a functional grouping, not a wiring schematic. Site geometry from KB site_qaarusuup.md. Elevation is DEM ground ellipsoidal height, not antenna height or height above sea level. SAR text now refers to the 600-second recording, not the 597-second processed aperture. Original research figures retained.
