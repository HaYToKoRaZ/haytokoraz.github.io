param(
    [string]$Message = ""
)

# Calisma dizinini repo kok dizinine sabitle
$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $RepoRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  HaYTo GitHub Auto Push Script (.ps1)  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Git kontrolu
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "HATA: Git komutu sistemde bulunamadi!" -ForegroundColor Red
    exit 1
}

# Degisiklik kontrolu
$status = git status --porcelain
if (-not $status) {
    Write-Host "Herhangi bir yerel degisiklik bulunamadi. Calisma alani zaten guncel." -ForegroundColor Yellow
    exit 0
}

Write-Host "Tespit edilen yerel degisiklikler:" -ForegroundColor Yellow
git status -s

# Commit mesaji kontrolu
if ([string]::IsNullOrWhiteSpace($Message)) {
    $inputMsg = Read-Host "`nCommit mesaji girin (Bos birakilirsa otomatik tarih/saat kullanilir)"
    if ([string]::IsNullOrWhiteSpace($inputMsg)) {
        $Message = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    } else {
        $Message = $inputMsg
    }
}

Write-Host "`n[1/3] Dosyalar sahneleniyor (git add .)..." -ForegroundColor Cyan
git add .

Write-Host "[2/3] Commit olusturuluyor: '$Message'..." -ForegroundColor Cyan
git commit -m "$Message"

Write-Host "[3/3] GitHub'a pushlaniyor (git push origin main)..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[BASARILI] Degisiklikler GitHub'a gonderildi!" -ForegroundColor Green
} else {
    Write-Host "`n[HATA] Push sirasinda bir sorun olustu!" -ForegroundColor Red
}
