    homeScoreEl = document.getElementById("scoreHome")
    let homeScore = 0
    guestScoreEl = document.getElementById("scoreGuest")
    let guestScore = 0


    function addOneGuest(){
    guestScore += 1
    guestScoreEl.innerText = guestScore  
}

    function addTwoGuest(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
}
    function addThreeGuest(){
        guestScore += 3 
        guestScoreEl.innerText = guestScore
    }
    function resetButtonGuest(){
        guestScore -= guestScore
        guestScoreEl.innerText = guestScore
    }

    function addOneHome(){
        homeScore += 1
        homeScoreEl.innerText = homeScore
    }
    function addTwoHome(){
        homeScore += 2
        homeScoreEl.innerText = homeScore
    }
    function addThreeHome(){
        homeScore += 3 
        homeScoreEl.innerText = homeScore
    }
    function resetButtonHome(){
        homeScore -= homeScore
        homeScoreEl.innerText = homeScore
    }
    