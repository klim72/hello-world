"""아주 간단한 날씨 정보 예제."""


def weather_message(condition: str) -> str:
    """날씨 상태에 맞는 짧은 안내 문구를 반환합니다."""
    tips = {
        "sunny": "맑아요. 가벼운 외출하기 좋아요!",
        "rainy": "비가 와요. 우산을 챙기세요!",
        "snowy": "눈이 와요. 길이 미끄러우니 조심하세요!",
        "cloudy": "흐려요. 얇은 겉옷을 챙기면 좋아요!",
    }
    return tips.get(condition.lower(), "날씨 정보를 확인할 수 없어요.")


if __name__ == "__main__":
    print(weather_message("rainy"))
