Add-Type -AssemblyName System.Drawing
$files = @(
"assets/img/KinderCheck/Index.png",
"assets/img/KinderCheck/Teacher.png",
"assets/img/KinderCheck/Parent.png",
"assets/img/Metacognis/Metacognis.png",
"assets/img/PopTechSmartGrades/ClassView.png",
"assets/img/PopTechSmartGrades/StudentView.png",
"assets/img/PopTechSmartGrades/GeneratedTest.png",
"assets/img/Faculta/ISS/Login.png",
"assets/img/Faculta/ISS/Dashboard.png",
"assets/img/Faculta/ISS/SessionManagement.png",
"assets/img/Liceu/FTC.png",
"assets/img/Portfolio/portfolio-screenshot.png",
"assets/img/Portfolio/portfolio-about.png",
"assets/img/Portfolio/portfolio-projects.png",
"assets/img/Faculta/RPA/Screenshot 2022-03-01 222341.png",
"assets/img/Faculta/RPA/Screenshot 2022-03-01 222002.png",
"assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png",
"assets/img/Practica/Screenshot 2022-03-01 221720.png",
"assets/img/Faculta/MA/Images/Looks/Preview.png",
"assets/img/Faculta/MA/Images/Looks/Update.png",
"assets/img/Faculta/MA/Images/Looks/List.png",
"assets/img/Faculta/MA/Images/Looks/Create.png",
"assets/img/Faculta/MA/Images/Looks/OfflineWarning.png",
"assets/img/Faculta/MPP/MPP.png",
"assets/img/Faculta/MPP/MPP2.png",
"assets/img/Faculta/MPP/MPP3.png",
"assets/img/Faculta/VR/Screenshot 2022-03-01 222923.png",
"assets/img/Faculta/VR/Screenshot 2022-03-01 223705.png",
"assets/img/Faculta/VR/Screenshot 2022-03-01 225758.png",
"assets/img/Faculta/VR/Screenshot 2022-03-01 225916.png",
"assets/img/Faculta/Web/Screenshot 2022-03-01 214921.png",
"assets/img/Liceu/Atestat/Screenshot 2022-03-01 225303.png",
"assets/img/Liceu/appbio.png",
"assets/img/Liceu/paint.png",
"assets/img/triangle-mosaic.png",
"assets/img/Games/FishFantasy/FishFantasy.jpg",
"assets/img/Games/Carl.png",
"assets/img/Faculta/Master/unnamed.png",
"assets/img/Games/LK/Screenshot_20190701-213821.png",
"assets/img/Games/LK/Screenshot_20190707-085943.png",
"assets/img/Games/LK/Screenshot_20190707-090155.png",
"assets/img/Games/BookOfHeroes/Book of Heroes.png",
"assets/img/Games/BookOfHeroes/Book of Heroes 2.png",
"assets/img/Games/BookOfHeroes/Book of Heroes 3.png",
"assets/img/Games/IMG-20200308-WA0000.jpg",
"assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png",
"assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png"
)

foreach ($file in $files) {
    $fullPath = Join-Path "d:\Projects2\Portofoliu\portfolio\src" $file
    if (Test-Path $fullPath) {
        try {
            $img = [System.Drawing.Image]::FromFile($fullPath)
            $orientation = if ($img.Width -ge $img.Height) { "Landscape" } else { "Portrait" }
            Write-Output "$file : $orientation"
            $img.Dispose()
        } catch {
            Write-Output "$file : Error"
        }
    } else {
        Write-Output "$file : NotFound"
    }
}