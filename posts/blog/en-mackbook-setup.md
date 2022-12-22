---
title: 'Mac Setup 2022'
posttitle: 'Mac Setup 2022'
postsubtitle: 'Web Development'
date: '2022-09-15 07:00:00'
tags:
  - mac
lang: en
about: note
---

inspired by [Robin Wieruch's Mac Setup](https://www.robinwieruch.de/mac-setup-web-development/).

---

## MacBook Pro Specification

- 13-inch
- 2 GHz Quad-Core Intel Core i5
- 16 GB RAM
- 512 GB SSD
- DVORAK (English), Japanese (Romaji), Korean (3-Beolsik)
- macOS Monterey

## System Preferences

- General
  - Appearance - Auto
- Dock
  - position right
  - remove most apps from Dock
  - automatic hide
  - size - close to small
  - turn on the magnification - slightly larger than the size
  - "show recent apps in Dock" OFF
  - "show indicators for open apps" ON
  - "automatically hide and show the menu bar on desktop" ON
- Menu Bar
  - Wi-Fi | Bluetooth | Airdrop | Sound | Now Playing | Spotlight | Siri
    - "show in menu bar" OFF
  - Battery
    - "show percentage" ON
  - Clock
    - "use a 24-hour clock" ON
    - "announce the time" -> on the hour ON (\*first time using it)
- Mission Control
  - Hot Corners: disable all
- Siri
  - disable
- Spotlight
  - Disable all except 'Applications' and 'System Preferences'
- Notifications
  - Off, except calendar, mail, and reminders
- Security and Privacy
  - require password '5 minutes' after sleep or screen saver begins
  - "use your apple watch to unlock apps and your mac" ON
  - Turn on FileVault
  - Add your browser to "Screen Recording" in privacy
- Keyboard
  - Text
    - "correct spelling automatically" OFF
    - "capitalize words automatically" OFF
    - "add period with double-space" OFF
    - "use smart quotes and dashes" OFF
    - use "abc" for double quotes
    - use 'abc' for single quotes
    - Turn the microphone off
- Trackpad
  - "Tap top Click" ON
  - "Point & Click -> Look up & data detectors" OFF
  - "Silent clicking" ON
  - speed 7/10
- Display
  - nightshift on
- Sharing
  - Change computer name
  - Also terminal:
    - `sudo scutil --set ComputerName "newname"`
    - `sudo scutil --set LocalHostName "newname"`
    - `sudo scutil --set HostName "newname"`
  - turn off "AirPlay Receiver" and all other sharings
- Finder Preferences
  - Tags
    - disable all
  - Sidebar
    - activate all Favorites
  - Advanced
    - "show all filename extensions" ON
      - "remove items from the trash after 30 days" ON
  - View -> Show Preview (for images)
- Default Browser - Arc (download it first)

## System Preferences (terminal)

```sh
# take screenshots as jpg (usually smaller size) and not png
defaults write com.apple.screencapture type jpg

# do not open previous previewed files (e.g. PDFs) when opening a new one
defaults write com.apple.Preview ApplePersistenceIgnoreState YES

# show Library folder
chflags nohidden ~/Library

# show path bar
defaults write com.apple.finder ShowPathbar -bool true

# show status bar
defaults write com.apple.finder ShowStatusBar -bool true

killall Finder;
```

## Homebrew

```sh
# install homebrew as a package manager for macOS
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# update everything in homebrew to recent version
brew update

# install GUI applications
brew install --cask \
 bitwarden \
 iterm2 \
 visual-studio-code \
 discord \
 slack \
 docker \
 imageoptim \
 raycast \
 spotify

# install terminal applications
brew install \
 wget \
 exa \
 git \
 nvm \
 pnpm \
 graphicsmagick
```

## OH MY ZSH

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# omz update
source ~/.zshrc
```

## Oh My Zsh Theme + Fonts

```sh
brew install starship
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

## exa setting

Set aliases for `exa`:

```sh
if [[ $(command -v exa) ]]; then
  alias e='exa --icons'
  alias l=e
  alias ls=e
  alias ea='exa -a --icons'
  alias la=ea
  alias ee='exa -aal --icons'
  alias ll=ee
  alias et='exa -T -L 3 -a -I "node_modules|.git|.cache" --icons'
  alias lt=et
  alias eta='exa -T -a -I "node_modules|.git|.cache" --color=always --icons | less -r'
  alias lta=eta
fi
```

## VS Code

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Hide](https://marketplace.visualstudio.com/items?itemName=sirmspencer.vscode-autohide)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VSCode React Refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
- [The Doki Theme](https://marketplace.visualstudio.com/items?itemName=unthrottled.doki-theme)

## Happy Hacking Keyboard

My mac had an issue with recognizing the keyboard.
It couldn't read `international1` key which was used for backtick(\`) and tilde(~).

I used [Karabiner](https://karabiner-elements.pqrs.org/) to remap `international1` to `grave_accent_and_tilde` and it works great :)

## Other Apps

- Arc [https://thebrowser.company/](https://thebrowser.company/)
- Nota [https://nota.md](https://nota.md/)
- Setapp [https://setapp.com/](https://setapp.com/)

## Setapp

- Two Macs plan
- referral link: [https://go.setapp.com/invite/kj6niwmi](https://go.setapp.com/invite/kj6niwmi)
- What I'm using
  - ⭐️ Session
  - ⭐️ CleanMyMac X
  - ⭐️ Lofi Garden
  - ⭐️ CodeRunner
  - ⭐️ CleanShot X
  - Bartender
  - Mosaic
  - Step Two
  - ClearVPN
  - One Switch
  - Petrify
  - SnippetsLab
