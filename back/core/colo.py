import math


palette_rgb = [[0, 77, 133],
               [73, 49, 37],
               [250, 4, 7],
               [255, 254, 250],
               [255, 223, 0]]

df_color_rgb = [217, 167, 135]
amount = [0, 0, 0, 0, 0]
amount_per = [0, 0, 0, 0, 0]


def generate_color(palette, df_col, amount, amount_per):
    ro_next = 500
    ro_prev = 1000
    generated_color = [0, 0, 0]
    non_impact = 0
    modify = True
    while modify:
        for i in range(len(palette)):
            while ro_next < ro_prev:
                amount[i] += 1
                calc_amount_per(amount, amount_per)
                generated_color = calc_color(palette, amount_per)

                if ro_next <= calc_ro(generated_color, df_col):
                    non_impact += 1
                    amount[i] -= 1
                    calc_amount_per(amount, amount_per)
                    if non_impact == 5:
                        modify = False
                    break
                else:
                    non_impact = 0
                    ro_prev = ro_next
                    ro_next = calc_ro(generated_color, df_col)
    return (generated_color, ro_next)


def calc_amount_per(amount, amount_per):
    total = sum(amount)
    for i in range(len(amount)):
        amount_per[i] = amount[i]/total


def calc_color(palette, amount_per):
    color = [0, 0, 0]
    for i in range(len(palette)):
        for j in range(len(palette[i])):
            color[j] += palette[i][j] * amount_per[i]

    return color


def calc_ro(gn_col, df_col):
    return math.sqrt(math.pow(gn_col[0]-df_col[0], 2) + math.pow(gn_col[1]-df_col[1], 2) + math.pow(gn_col[2]-df_col[2], 2))



    

if __name__ == '__main__':
    col = generate_color(palette_rgb, df_color_rgb, amount, amount_per)
    print(col)
