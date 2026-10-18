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

## 2026-10-16 update

- CV link (top menu, home button, About text) now points to the Google Drive PDF `1p2Gel0rcGHPrFgF7tYKHslObPG0OC7n6`, checked to open signed out. The old Google Doc link was editable by anyone with the link. To update the CV later, upload a new version of the same Drive file (Manage versions) so the link stays the same.
- "USRP B210" renamed "Software-defined radio" on the instrument photo label, the receiver chain and its paragraph, at the user's request. The acquisition facts keep the model: "Software-defined radio (USRP B210)". The photo label is now two lines, with its leader line moved up, so it no longer touches "LHCP antenna".
- Research outputs restructured at the user's request (2026-10-16, second pass): the "Building on the images" block and "The effect of terrain in image formation" comparison were removed. The NBRCS toggle now follows the range-Doppler block, and the interferometry toggle follows the SAR block. "Terrain-referenced SAR imagery" became "SAR imagery", and "terrain-referenced" was also dropped from the My role and About text. The words "day-to-day" and the ROI outline (black line) were dropped. sar-flat.png, sar-terrain.png and range-doppler.png stay in the repo but are no longer referenced.
- User's decision: no paper titles, venues or numbers in the text; the site presents the work. Absolute NBRCS values (dB colour bar) may be shown (user, 2026-10-16), which overrides the 09-07 exclusion of absolute backscatter values for these maps.

Figures, rendered on mull680 by `~/Jhbang_research/processing/greenland_out/pairs_25_gps/mk_web_figs_20261016b.py` (output `processing/website_figs_20261016/`). It supersedes `mk_web_figs_20261016.py`. The data, computation, colour maps and colour limits are those of the IGARSS 2027 paper figure scripts; only the presentation differs. No pixel editing.
- rd-map.png ← `mk_fig1_rdmap.py` panel (a): G11 20260803 120011 `rdm_seg00.bin` (60 s segment), S/N above the noise floor, jet, −3 to 19 dB, 0–2.6 km; the paper's slope box is not drawn. Peak S/N printed: 18.29 dB. It replaces range-doppler.png on the page, at the user's request to match the paper colours.
- nbrcs-rd.png, nbrcs-sar.png ← `mk_fig3_maps_1x3.py` panels (a) and (b), `~/sdr/elev/dump_real_G11_0803.npz`, viridis, shared limits −33.39 to −14.00 dB.
- ifg-phase.png, ifg-coherence.png ← `mk_insar_figs.py` Fig. 2 panels (b) and (d), pair g11_120011_20260802_20260803. The phase uses hsv from −π to π and is shown only where coherence is at least 0.3, which covers 75 % of land pixels. Coherence is drawn in viridis, not the paper's gray, because gray cannot be read over the gray hillshade.
- The maps follow the style of the site's SAR figure (sar_overlay.py panel 3): ArcticDEM 2 m hillshade, white 100 m contours, overlay alpha 0.75, a cyan DEM waterline, the receiver triangle, and axes in metres. All four maps share one frame (frame_extent of the interferogram lattice, E −2380 to 250 m). The north edge is cropped 60 m above the image box because the hillshade beyond it shows DEM striping. Patches without an NBRCS value are left transparent.
- rd-map.png SHA256 2691b59318ff4360fd188aadb274a4e6951c364124bf52ce0cfff218069cd30f
- nbrcs-rd.png SHA256 0efd2b0c8c581e12297a221a58bb239bef81b8c31489e3e07ba1bfdf9ea31846
- nbrcs-sar.png SHA256 623e1cbaf2601c54b4a29208a2bc0a9692167eb900c89b0b35aa752968ac544e
- ifg-phase.png SHA256 757f05dabbbf78ea25a13361520e443bc5c0a8f76e360382f0bbdb08f99ae9b2
- ifg-coherence.png SHA256 1154eb2fefaa3fddf934e457aaf8220b47ec24176799e8e4e54b508918ce0a0f

Lightbox captions now keep the break between a figure's title and its subtitle: "Title · subtitle" instead of "Titlesubtitle".

## 2026-10-17 update (research outputs v3)

- Research outputs rewritten in the order of what each output is, what it shows and why it matters. Section title: "What the first recordings show." The intro names the three things the radar must do: see the slope, place each reflection on it, and detect small changes between visits. "Potential applications" became "Why it matters". The repeated "requires further validation" sentences were removed at the user's request; the wording stays modal ("could") and claims no measured deformation. Technical captions (signal, SNR, displayed range) were shortened to plain captions; the technical facts stay in the Acquisition toggle.
- Figures rendered by `processing/greenland_out/pairs_25_gps/mk_web_figs_20261017.py` (supersedes ...20261016b.py; same output folder).
  - rd-map.png: the paper's slope box was added, computed verbatim from mk_fig1_rdmap.py, with a "slope" label. Control: the paper script, run to /tmp/figchk, prints the same box (1.139–1.871 km, Doppler −1.00 to 0.00 Hz, peak S/N 18.29 dB).
  - sar-map.png replaces sar-dem.png. sar-dem.png is the old D1 deliverable, which showed returns over the fjord. The new image is the current fixed-ROI G11 20260803 120011 image (`~/sdr/ifg_build_20260909/npz_roi/g11_20260803_120011_dem.npz`). It is the lattice the interferograms use, displayed as in rebuild_roi3.sh: --mask roi_mask.npz, --abs-db 136 164, inferno, alpha 0.75. The mask is DISPLAY ONLY: it shows the slope the antenna views (Z > 20 m within the 307–357° sector). The returns over the sea were not removed by processing; they are simply not drawn. The caption says the image is "shown on the part of the slope the antenna views".
  - ifg-phase.png: the colour map changed from hsv to jet, at the user's request, to match conventional InSAR figures.
- rd-map.png SHA256 1a835d4a62257b8a395e5022f912d1526d82e64ff143927bdca1b813fb1c5019
- sar-map.png SHA256 3d9681b17ed4ba4f5e876c1d3dc4db71bec27f2c9f371d453b6a4615639f21d0
- nbrcs-rd.png SHA256 0efd2b0c8c581e12297a221a58bb239bef81b8c31489e3e07ba1bfdf9ea31846
- nbrcs-sar.png SHA256 623e1cbaf2601c54b4a29208a2bc0a9692167eb900c89b0b35aa752968ac544e
- ifg-phase.png SHA256 b2adbd778754af9e466c0e17836e0d455d5dd14b4fd1ca59e3a191bf1254dd25
- ifg-coherence.png SHA256 1154eb2fefaa3fddf934e457aaf8220b47ec24176799e8e4e54b508918ce0a0f

2026-10-18, research outputs text revised again at the user's request: the v3 framing ("What the first recordings show.", separate "Why it matters" boxes) was dropped. The section title is back to "Two ways to examine the slope." Each block now says what the result shows and, in the same prose, what it could make possible, with no separate applications box; the v3 figures are kept. Rockfall detection was then removed, at the user's request: it needs detection within 1 to 3 s, but the slope only appears in the range-Doppler map after about 60 s of integration.
The Problem section keeps only the problem, at the user's request; the complement statement belongs to the interferometry output. Its last sentence names the gaps from section 01 that the ground receiver addresses (revisit, points rather than the slope face, no transmitter). It does not name the summer-only limit of UAV surveys, because year-round operation has not been shown yet.
What next / Repeat measurements: "Test phase coherence between acquisitions" was out of date once section 04 showed coherence between acquisitions. It now reads "Extend interferometry from a few days of acquisitions to a full year, and develop the analysis needed to turn repeated interferograms into measurements of slope deformation."
Interferometry complement sentence: low cost added at the user's request. Active ground-based InSAR performs better but draws more power and costs much more; the passive receiver is built from low-cost parts and needs no transmitter of its own.
