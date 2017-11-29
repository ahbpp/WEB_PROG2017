package main
import (
	"unicode"
)

func RemoveEven(input []int) []int {
	var result []int
	for i, elem := range input {
		if input[i] % 2 == 1 {
			result = append(result, elem);
		}
	}
	return result
}

func PowerGenerator(a int) (func() int) {
	b := a
	return func() (ret int) {
		ret = b
		b = b * a
		return
	}
}

func DifferentWordsCount(text string) int {
	var words []string
	words = append(words, "")
	j := 0
	EndOfWord := false
	for i := range text {
		if unicode.IsLetter(rune(text[i])) {
			words[j] = words[j] + string(unicode.ToLower(rune(text[i])))
			EndOfWord = false
		} else if !EndOfWord {
			EndOfWord = true
			words = append(words, "")
			j++
		}
	}
	DifferentWords :=  make(map[string]int)
	for i := range words {
		if words[i] != "" {
			DifferentWords[words[i]]++
		}
	}
	return len(DifferentWords)
}
