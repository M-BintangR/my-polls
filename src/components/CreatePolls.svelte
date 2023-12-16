<script>
  import Button from "./Button.svelte";

  let fields = { question: "", answerA: "", answerB: "" };
  let erros = { question: "", answerA: "", answerB: "" };
  let valid = false;

  let submitHandler = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid = false;
      erros.question = "Question must be at latest 5 character long";
    }

    if (fields.answerA.trim().length < 5) {
      valid = false;
      erros.answerA = "Answer A must be at latest 5 character long";
    }

    if (fields.answerB.trim().length < 5) {
      valid = false;
      erros.answerB = "Answer A must be at latest 5 character long";
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{erros.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A value:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{erros.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B value:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{erros.answerB}</div>
  </div>
  <Button type="secondary" inverse={true}>Add Polls</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
