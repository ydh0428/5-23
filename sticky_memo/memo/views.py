from django.shortcuts import render,redirect
from memo.models import Memo
def get_all_memo(request):
    memo_list = Memo.objects.all()
    context = {"memos": memo_list}

    return render(request, "memo_list.html", context)

def get_memo(request, pk):
    memo = Memo.objects.get(id=pk)
    context = {"memo": memo}

    return render(request, "memo_detail.html", context)

from memo.forms import MemoForm
def create_memo(request):
    if request.method == 'GET':
        form = MemoForm()
        context = {'form': form}
        return render(request, 'memo_create.html', context)

    elif request.method == 'POST':
        form = MemoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('memo_list')
